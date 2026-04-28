<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/shaders/CopyShader.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/postprocessing/EffectComposer.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/postprocessing/RenderPass.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/postprocessing/ShaderPass.js"></script>
<script src="https://unpkg.com/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .top {
     background-color: #2e16c9; 
     padding-left: 40px; 
  }

  .jump a {
     display: inline-flex;
     min-height: auto;
     justify-content: center;
     margin: 10px auto;
     padding: .7em 2em;
     background-color: #161a20;
     border: none;
     color: #e4f1fb;
     border-radius: 50px;
     align-items: center;
     font-size: 0.85em;
     font-family: 'Press Start 2P';
     position: relative;
     width: auto;
     margin-left: 20px;
     transition: all 0.3s ease;
  }

  .jump a::after{
     content: '';
     position: absolute;
     width: 105%;
     height: 100%;
     background-image: linear-gradient(135deg, #00d4ff, #ff00ff); 
     border-radius: 50px;
     z-index: -1;
     transition: all 0.3s ease;
  }

  .jump a:hover {
     padding: .7em 2.2em;
     box-shadow: 0 0 30px #00d4ff,
     0 0 50px #ff00ff,
     inset 0 0 20px rgba(0, 212, 255, 0.2);
     transform: translateY(-3px);
  }
  
  .content {
    padding: 30px;
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
  }

  webheader {
    font-weight: bold;
    font-size: 1.5em;
    color: #e4f1fb;
  }

  .jump {
    list-style: none;
    margin: 10px 0;
  }
</style>
</head>
<body class="top">
<div class="content">

<webheader>Web Design Projects</webheader>

<ul>
    <li class="jump"><a href="Introduction-to-JQuery" target="_blank">Introduction to JQuery</a></li>
    <li class="jump"><a href="JQuery-Attributes" target="_blank">JQuery Attributes</a></li>
    <li class="jump"><a href="https://www.figma.com/design/dXIsgxTlqXtQpcYPI2tNDP/BillyMac?t=MoLDptZ672uqsNlT-0" target="_blank">Figma Layout for JQuery Billy Mac Website</a></li>
    <li class="jump"><a href="JQuery-Billy-Mac-Website" target="_blank">JQuery Billy Mac Website</a></li>
</ul> 
 

</div>
</body>
</html>
