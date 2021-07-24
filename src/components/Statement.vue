<template>
  <div>

    <h1>ระบบบันทึกรายรับรายจ่าย</h1>
    
    <div class="information">
      <label for="number">จำนวนเงิน:</label>
      <input type="number" id="number" v-model="form.number">
      <br>
      <label for="information">รายละเอียด:</label>
      <input type="information" id="information" v-model="form.information">
    </div>

    <div class="category">
      <h3>ประเภทการเงิน</h3>
      <input type="radio" id="income" name="category" v-bind:value="form.number" v-model="form.income">
      <label for="income">รายรับ</label>
      <input type="radio" id="expense" name="category" v-bind:value="form.number" v-model="form.expense">
      <label for="expense">รายจ่าย</label>
    </div>

    <div class="calendar">
      <label for="date">วันที่:</label>
      <input type="date" id="date" name="date" v-model="form.date">
    </div>

    <button @click="addStatement">Submit</button>

  </div>
</template>

<script>
import StatementStore from '@/store/cashFlow.js'
export default {
  
  data() {
    return {
      form: {
        date: '',
        information: '',
        income: '',
        expense: ''
      }
    }
  },
  methods: {
    clearForm() {
      this.form = {
        date: '',
        information: '',
        income: '',
        expense: '' 
      }
    },
    addStatement() {
      let payload = {
        date: this.form.date,
        information: this.form.information,
        income: this.form.income,
        expense: this.form.expense
      }

      console.log(payload)
      StatementStore.dispatch("addStatement", payload)
      this.clearForm()    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  button {
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  #expense {
    margin-left: 30px;
  }

  input {
    margin: 10px;
  }

  h3 {
    margin-bottom: -2px;
  }

  // .information {
  //   background-color: yellow;
  // }

  // .information:hover {
  //   background-color: rgb(0, 60, 255);
  // }

</style>
