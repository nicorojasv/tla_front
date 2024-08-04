<template>
    <div class="footer-container">
      <b-row class="justify-content-center">
        <b-col class="text-center">
          <p>&copy; {{ new Date().getFullYear() }} Transportes Empresas Integra. Todos los derechos reservados.</p>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #f8f9fa;
    padding: 20px 0;
    border-top: 1px solid #dee2e6;
  }
  
  .footer-container p {
    margin: 0;
    color: #6c757d;
  }
  
  .footer-container a {
    color: #007bff;
    text-decoration: none;
  }
  
  .footer-container a:hover {
    text-decoration: underline;
  }
  </style>
  