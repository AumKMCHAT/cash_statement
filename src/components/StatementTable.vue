<template>

    <div>
    <table>
        <thead>
            <th>วันที่</th>
            <th>รายละเอียด</th>
            <th>รายรับ</th>
            <th>รายจ่าย</th>
        </thead>

        <tbody>
            <tr v-for="(state, index) in statements" :key="index">
                <td>{{ state.date }}</td>
                <td>{{ state.information }}</td>
                <td id="income">{{ state.income }}</td>
                <td id="expense">{{ state.expense }}</td>
            </tr>
        </tbody>
        </table>

        <div class="summary">
            <h4 id="income">รายรับ: {{ sumIncome() }}</h4>
            <h4 id="expense">รายจ่าย: {{ sumExpense() }}</h4>
            <h4 id="balance">คงเหลือ: {{ sumIncome() - sumExpense() }}</h4>
        </div>
    </div>
    
</template>

<script>
import StatementStore from '@/store/cashFlow.js'
export default {
    data() {
        return {
            statements: []
        }
    },
    created() {
        this.fetchStatement()
    },
    methods: {
        fetchStatement() {
            StatementStore.dispatch('fetchStatement')
            this.statements = StatementStore.getters.statements
        },
        sumIncome() {
            let total = 0
            for(let i=0; i<this.statements.length; i++){
                
                if(this.statements[i].income != ""){
                    total += parseInt(this.statements[i].income)
                }
                console.log(this.statements[i])
            }
            return total
        },
        sumExpense() {
            let total = 0
            for(let i=0;i<this.statements.length;i++){
                
                if(this.statements[i].expense != ""){
                    total += parseInt(this.statements[i].expense)
                }
            }
            return total
        }
    }
}
</script>

<style scoped lang="scss">
    table{
        width: 100%;
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid black;
    }
    thead {
        background-color: #0476aa;
        color: white;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
    #income {
        color: rgb(25, 161, 25);
    }
    #expense {
        color: red;
    }
    .summary {
        background-color: #f2f2f2;
    }
    
</style>>