<template>
  <div>
    <Statement></Statement>
    <statement-table></statement-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Statement from '@/components/Statement.vue'
import StatementTable from '@/components/StatementTable.vue'
export default {
  components: {
    Statement,
    StatementTable
  }
}
</script>