<template>
  <div class="justify-content-md-center">
    
    <b-table
      head-variant="dark"
      striped 
      hover
      :fields="fields" 
      :items="items"
    >
    
    <template #cell(edit)="row">


    <b-button size="sm" title="Editar" variant="warning" @click="handleEdit(row.item.id)" class="mr-1"><b-icon icon="pencil-square"></b-icon></b-button>
    <b-button size="sm" title="Deletar" variant="danger" @click="handleDelete(row.item.id)" ><b-icon icon="trash"></b-icon></b-button>


    </template>
    
    </b-table>
  </div>
</template>

<script>

import api from '@/services/api'

export default {

    name: 'ListStudents',

    data() {
        return {
            items: [],
            fields:[

                {
                    key: 'name', 
                    label: 'Nome:', 
                    sortable: true
                },
                {
                    key: 'email', 
                    label: 'E-mail:',
                    sortable: false
                },
                {
                    key: 'phone', 
                    label: 'Telefone:',
                    sortable: true
                },
                {
                    key: 'edit', 
                    label: 'Ação:',
                    sortable: false
                }
            ]
        }   
    },
    mounted() {
        this.listStudents()
    },
    methods: {
        listStudents() {

            api.get('students').then(res => {

                const { data } = res
                this.items = data

            })
        },

        handleEdit( item ){
            window.location.href = `/student/edit/${ item }`;
        },

        handleDelete( item ){
          
          if(confirm('Você realmente deseja excluir este estudante?')){
            api.delete(`students/${ item }`)
            .then(()=>{
                alert('Estudante excluído com sucesso!')
            })
            .catch(()=>{
                alert('Não foi possivel excluir o estudante!');
            });

          }

        },
    },
    components: {

    }   
}
</script>

<style>

</style>