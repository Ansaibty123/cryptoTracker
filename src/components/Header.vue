<template>
    <div class="header">
      <h1>KoinX</h1>
      <div class="nav">
        <a href="#">Crypto Taxes</a>
        <a href="#">Free Tools</a>
        <a href="#">Resource Center</a>
        <button>Get Started</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
  }
  
  .nav a {
    margin-right: 20px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  