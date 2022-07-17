const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const arcsecond = require('arcsecond')
const arcsecond_binary = require('arcsecond-binary')

const router = Router();
const recordingPath = path.normalize(__dirname + "../../../recordings/new/03.14/Stage1/1v2");



router.get('/thehakon', (req,res) => {
    const textfileP1 = fs.readFileSync(recordingPath + '/Blue_DasbeI.json')
    const textfileP2 = fs.readFileSync(recordingPath + '/Blue_DeSímon.json')
    const textfileP5 = fs.readFileSync(recordingPath + '/Blue_Shina.json')
    const textfileP3 = fs.readFileSync(recordingPath + '/Blue_FNC-Camaro.json')
    const textfileP4 = fs.readFileSync(recordingPath + '/Blue_Onrikaru.json')
    const textfileP10 = fs.readFileSync(recordingPath + '/Red_Unfakeable.json')
    const textfileP8 = fs.readFileSync(recordingPath + '/Red_TH-JNS.json')
    const textfileP6 = fs.readFileSync(recordingPath + '/Red_BlµeMµffin.json')
    const textfileP9 = fs.readFileSync(recordingPath + '/Red_TH-Pugas.json')
    const textfileP7 = fs.readFileSync(recordingPath + '/Red_Swenja.json')
    res.status(200).send([
        JSON.parse(textfileP1.toString()),
        JSON.parse(textfileP2.toString()),
        JSON.parse(textfileP5.toString()),
        JSON.parse(textfileP3.toString()),
        JSON.parse(textfileP4.toString()),
        JSON.parse(textfileP10.toString()),
        JSON.parse(textfileP8.toString()),
        JSON.parse(textfileP6.toString()),
        JSON.parse(textfileP9.toString()),
        JSON.parse(textfileP7.toString())])
})
.get('/thehakon/wav', (req,res) => {

    const file = fs.readFileSync(recordingPath + '/NewCutTheHakon.wav')
    
    const riffChunkSize = arcsecond_binary.u32LE.chain(size => {
        if(size !== file.length - 8) {
            return arcsecond.fail(`Invalid file size: ${file.length}. Expected ${size}`)
        }
        return arcsecond.succeedWith(size)
    })
    
    const riffChunk = arcsecond.sequenceOf([
        arcsecond.str('RIFF'),
        riffChunkSize,
        arcsecond.str('WAVE')
    ])
    
    const fmtSubChunk = arcsecond.coroutine(function* () {
        const id = yield arcsecond.str('fmt ');
        const subChunk1Size = yield arcsecond_binary.u32LE;
        let audioFormat = yield arcsecond_binary.u16LE;
        if(audioFormat == 1){
            audioFormat = 'PCM'
        }
        let numChannels = yield arcsecond_binary.u16LE;
        const sampleRate = yield arcsecond_binary.u32LE;
        const byteRate = yield arcsecond_binary.u32LE;
        const blockAlign = yield arcsecond_binary.u16LE;
        const bitsPerSample = yield arcsecond_binary.u16LE;
    
        const expectedByteRate = sampleRate * numChannels * bitsPerSample / 8
        if(byteRate !== expectedByteRate) {
            yield arcsecond.fail(`Invalid byte rate: ${byteRate}. Expected ${expectedByteRate}`)
        }
    
        const expectedBlockAlign = numChannels * bitsPerSample / 8;
        if(blockAlign !== expectedBlockAlign) {
            yield arcsecond.fail(`Invalid block align: ${blockAlign}. Expected ${expectedBlockAlign}`)
        }
    
        const fmtChunkData = {
            id,
            subChunk1Size,
            audioFormat,
            numChannels,
            sampleRate,
            byteRate,
            blockAlign,
            bitsPerSample
        }
    
        yield arcsecond.setData(fmtChunkData)
        return fmtChunkData
    })
    
    const dataSubChunk = arcsecond.coroutine(function* () {
        const id = yield arcsecond.str('data')
        const size = yield arcsecond_binary.u32LE
        const fmtData = yield arcsecond.getData
    
        const samples = size / fmtData.numChannels / (fmtData.bitsPerSample / 8)
        const channelData = Array.from({length: fmtData.numChannels}, () => [])
    
        let sampleParser;
        if (fmtData.bitsPerSample === 8){
            sampleParser = arcsecond_binary.s8;
        } else if (fmtData.bitsPerSample === 16){
            sampleParser = arcsecond_binary.s16LE
        } else if (fmtData.bitsPerSample === 32){
            sampleParser = arcsecond_binary.s32LE
        } else {
            yield arcsecond.fail(`Unsupported bits per sample: ${fmtData.bitsPerSample}`)
        }
    
        for(let sampleIndex = 0; sampleIndex < samples; sampleIndex++){
            for (let i = 0; i < fmtData.numChannels; i++){
                const sampleValue = yield sampleParser;
                channelData[i].push(sampleValue)
            }
        }
    
        return {
            id,
            size,
            channelData
        }
    })
    
    const parser = arcsecond.sequenceOf([
        riffChunk,
        fmtSubChunk,
        dataSubChunk
    ]).map(([riffChunk, fmtSubChunk, dataSubChunk]) => ({
        riffChunk,
        fmtSubChunk,
        dataSubChunk
    }))
    
    const output = parser.run(file.buffer)
    if(output.isError) {
        console.log(output.error)
        res.status(500).send(`Es ist ein Fehler aufgetreten!`)
    }
    let volSum = 0.0;
    const volumeArray = [];
    for(let i = 0; i<output.result.dataSubChunk.channelData[0].length; i++){
        if(i != 0 && (i % 22050) == 0){
            volumeArray.push(Math.round(volSum/44100.0))
            volSum = 0.0;
        } else if(i == (output.result.dataSubChunk.channelData[0].length - 1)) {
            volumeArray.push(Math.round(volSum/((i%22050)*2)))
            volSum = 0.0;
        }
        volSum += Math.abs(output.result.dataSubChunk.channelData[0][i]);
    }
    res.status(200).send(volumeArray)
    
})

module.exports = router;