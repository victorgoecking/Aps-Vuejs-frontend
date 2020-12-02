<template>
  <div> 
    
    <b-card 
      header="Preencha os dados do estudante"
      header-bg-variant="light"
      header-text-variant="black"
    >
    <b-card-text>
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="student.name"
              required
              placeholder="Insira o nome"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group
            id="input-group-2"
            label="Endereço de e-mail:"
            label-for="input-2"
            description="Nunca compartilharemos seu e-mail com mais ninguém."
          >
          <b-form-input
            id="input-2"
            v-model="student.email"
            type="email"
            required
            placeholder="Digite o email"
          ></b-form-input>
          </b-form-group>
          
          <b-form-group id="input-group-3" label="Telefone:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="student.phone"
              required
              type="number"
              placeholder="Insira o telefone"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" size="md" variant="primary">Enviar</b-button>
          <b-button type="reset" size="md" class="ml-1" variant="outline-danger">Redefinir</b-button>
        </b-form>
      </div>
    </b-card-text>
    </b-card>
       
  </div>
</template>

<script>
// import api from "../services/api.js";
import api from "@/services/api";
export default {
    data() {
      return {
        student: {
          name: '',
          email: '',
          phone: ''
        },
        show: true
      }
    },
    components: {
    
    },
    methods: {
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.student.email = ''
        this.student.name = ''
        this.student.phone = ''
      },
      onSubmit(evt) {
        evt.preventDefault()
        const {
          name,
          email,
          phone,
        } = this.student;

        api.post('students', { 
          name,
          email,
          phone
        }).then(()=>{
          alert('Estudante cadastrado com sucesso!');
          this.onReset(evt)
        }).catch(()=>{
          alert('Erro ao cadastrar Estudante!');
        });
      }
    }
  }
</script>
<style>
</style>