<template>
  <div class="loading">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>


export default {
    
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #1E90FF;
  border-color: #1E90FF transparent #1E90FF transparent;
  animation: lds-dual-ring 2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>