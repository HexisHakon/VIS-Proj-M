<div id="top"></div>

![Contributors](https://img.shields.io/badge/Contributors-David-green?style=for-the-badge)

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/de/1/1f/Otto-Friedrich-Universität_Bamberg_logo.svg" alt="Logo der Otto-Friedrich-Universität Bamberg" width="200" height="200">
  <h3 align="center">VIS-Proj-M</h3>
  <p align="center">
    Project owner: David Glombik
    <br />
    Examiner: Prof. Dr. Fabian Beck
    <br />
    Supervisors: Shivam Agarwal & Cedric Krause
    <br />
    <a href="https://www.uni-bamberg.de/vis/"><strong>Website of the academic chair »</strong></a>
    <br />
    <br />
    <a href="#installation">Installation</a>
    ·
    <a href="#how-to-start">How to start</a>
  </p>
</div>

### Dependencies

* node.js v16.13.0 or higher
* RIOT Games account (<a href="https://auth.riotgames.com/login">https://auth.riotgames.com/login</a>) 



### Installation

1. In the root directory of the project:
  ```sh
  npm install
  ```
2. In the directory of the client (./client):
  ```sh
  npm install
  ```
3. Create file named ".env" in the root directory and paste in:
  ```sh
  RIOT_API_KEY=
  ```
4. Login <a href="https://developer.riotgames.com/">here</a> and generate & copy a generated token
5. Paste this token after the '=' in the .env file
<br />_Example: RIOT_API_KEY=RGAPI-187b27b8-1905-44e2-88dd-24f4e214e994_
<p align="right">(<a href="#top">back to top</a>)</p>
  
  
  
### How to start

1. Change the RIOT_API_KEY value in the .env file in the root directory of the project to a new token if the last start was over 24 hours ago (can be found <a href="https://developer.riotgames.com/">here</a>)
2. In the root directory of the project:
  ```sh
  npm start
  ```
3. In the directory of the client (./client):
  ```sh
  npm run serve
  ```
<p align="right">(<a href="#top">back to top</a>)</p>
