<template>
  <div class="vt-divider">
    <!--线条-->
    <p>
      <i></i>
    </p>
    <!--主题-->
    <h3>
      <span class="vt-grad">{{title}}</span>
    </h3>
  </div>
</template>

<script>
  export default {
    props: {
      title: ''
    }
  };
</script>

<style scoped>
  .vt-divider {
    padding: 30px 20px;
    background-color: #f9f6f1;
  }

  .vt-divider p {
    width: 80%;
    height: 1px;
    margin: 0 auto;
    background: #3ec455;
    z-index: 1;
  }

  .vt-divider p i {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 60%;
    height: 4px;
    margin: 0 auto;
    background: #3ec455;
    z-index: 1;
  }

  .vt-divider h3 {
    background: #f9f6f1;
    margin: -14px auto;
    text-align: center;
    z-index: 2;
    font-weight: 500;
    position: relative;
    width: 110px;
  }

  .vt-divider h3 span {
    line-height: 14px;
    font-size: 14px;
    box-shadow: 0 0 10px #ccc;
    background-color: #FFFFFF;
    overflow: hidden;
    padding: 8px 18px;
    z-index: 2;

  }
  .vt-grad {
    height: 200px;
    background: -webkit-linear-gradient(left top,#16aa6b, white); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom right, #16aa6b, white); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom right, #16aa6b, white); /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom right, #16aa6b, white); /* 标准的语法（必须放在最后） */
  }
</style>
