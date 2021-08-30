<template>
  <div class="bg-loader">
    <div class="loader">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.bg-loader {
  background: rgb(212, 194, 194);
  min-height: 100vh;
  min-width: 100vw;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.loader span {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: aliceblue;
  display: inline-block;
  transition: all 0.5s;
  animation: animate 2s infinite;
}
.loader span:nth-child(1) {
  animation-delay: 0.1s;
}
.loader span:nth-child(2) {
  animation-delay: 0.2s;
}
.loader span:nth-child(3) {
  animation-delay: 0.3s;
}
.loader span:nth-child(4) {
  animation-delay: 0.4s;
}
.loader span:nth-child(5) {
  animation-delay: 0.5s;
}
.loader span:nth-child(6) {
  animation-delay: 0.6s;
}
.loader span:nth-child(7) {
  animation-delay: 0.7s;
}
@keyframes animate {
  0% {
    color: aliceblue;
    transform: translateY(0);
    margin-left: 0;
  }
  25% {
    color: aliceblue;
    transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0, 0, 0, 1);
  }
  100% {
    color: aliceblue;
    transform: translateY(0);
    margin-left: 0;
  }
}
</style>
