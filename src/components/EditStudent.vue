<template>
  <div> 
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="12">
          <b-button size="sm" @click="handleGoBack()" class="mb-3" variant="warning"><b-icon icon="box-arrow-left"></b-icon>  Voltar</b-button>
          <b-card 
            header="Preencha os dados do estudante"
            header-bg-variant="light"
            header-text-variant="black"
          >
          
          <b-card-text>
            <div>
              <b-form @submit.prevent="onUpdate" v-if="show">
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

                <b-button type="submit" size="md" variant="primary">Atualizar</b-button>
                <b-button type="reset" size="md" class="ml-1" variant="outline-danger">Redefinir</b-button>
              </b-form>
            </div>
            
          </b-card-text>

          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import api from "@/services/api";
export default {

  
  name: "RegisterStudent",
  data() {
    return {

      student: {
        name: "",
        email: "",
        phone: ""
      },
        show: true
    };
  },
  
  created(){

    this.getInfo();

  },

  methods: {

        getInfo(){
            
            api.get(`students/${this.$route.params.id}`)
            .then(( res )=>{

                const { data } = res;
                
                this.student = data;
                
                

            })
            .catch(()=>{

                alert('Erro ao localizar estudante!');
            

            });
        },

        onUpdate(){
            api.put(`students/${this.$route.params.id}`)
            .then(()=>{

                alert('Estudante atualizado com sucesso')

            })
            .catch(()=>{

                alert('Não foi possivel atualizar o estudante!');


            });


        },

        handleGoBack(){

            this.$router.go(-1)

        }

  }
};
</script>