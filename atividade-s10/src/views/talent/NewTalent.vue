<template>

    <form @submit.prevent="handleSubmitTalent" class="form-menu">

        <div class="form-box">

            <div class="form-input">
                <label for="name">Nome completo</label>
                <input class="input-box" type="text" id="name" v-model="name"/>
                <span class="message-erro">{{ this.errors.name }}</span>
            </div>

            <div class="form-input">
                <label for="email">Email</label>
                <input class="input-box" type="text" id="email" v-model="email"/>
                <span class="message-erro">{{ this.errors.email }}</span>
            </div>

            <div class="form-input">
                <label for="birthday">Data de Nascimento</label>
                <input class="input-box" type="date" id="birthday" v-model="birthday"/>
            </div>

            <div class="form-input">
                <label for="contact">Whatsapp</label>
                <input class="input-box" type="text" id="contact" v-model="contact"/>
                <span class="message-erro">{{ this.errors.contact }}</span>
            </div>

        </div>

        <div>
            <label for="interest">Área de interesse</label>
            <select class="form-select" id="interest" v-model="interest">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
            </select>
        </div>

        <div>
            <label for="level">Nivel profissional</label>
            <select class="form-select" id="level" v-model="level">
                <option value="junior">Junior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Senior</option>
            </select>
        </div>

        <div>

            <label for="ability">Suas habilidades</label>
            <div v-if="interest === 'frontend' || interest === 'fullstack'">
                <input type="checkbox" id="ability" v-model="skills" value="HTML" /> HTML
                <input type="checkbox" id="ability" v-model="skills" value="CSS3" /> CSS3
                <input type="checkbox" id="ability" v-model="skills" value="Javascript" /> Javascript
            </div>

            <div v-if="interest === 'backend' || interest === 'fullstack'">
                <input type="checkbox" id="ability" v-model="skills" value="React" /> React
                <input type="checkbox" id="ability" v-model="skills" value="React-native" /> React-native
                <input type="checkbox" id="ability" v-model="skills" value="Node" /> Node
            </div>

        </div>
        <div>
            <input class="form-presentation" type="text" id="presentation" placeholder="Digite aqui sua carta de apresentação" v-model="presentation" />
        </div>

        <button class="form-button" type="submit">Cadastrar</button>

    </form>
</template>

<script>
    import * as yup from 'yup'
    import { captureErrorYup } from '../../utils/captureErrorYup'
    import axios from 'axios'

    export default {
        data() {
            return {
                name: '',
                email: '',
                birthday: '',
                contact: '',
                interest: '',
                level: '',
                skills: ['HTML', 'CSS3', 'Javascript', 'React','React-native', 'Node'],
                presentation: '',
                ability: '',

                errors: {}
            }
        },
        methods: {
            handleSubmitTalent(){
                try {
                    const schema = yup.object().shape({
                        name: yup.string().required('Nome é obrigatório'),
                        email: yup.string().email('Email não é valido').required('Email é obrigatório'),
                        contact: yup.string().required('Whatsapp é obrigatório')
                    })
                    schema.validateSync(
                        {
                            name: this.name,
                            email: this.email,
                            contact: this.contact,
                        },
                        { abortEarly:false }
                    )

                    axios ({
                        url: 'http://localhost:50001/talent',
                        method: 'POST',
                        data: {
                            name: this.name,
                            email: this.email,
                            date_birth: this.birthday,
                            contact: this.contact,
                            area: this.interest,
                            level: this.level,
                            skills: this.skills,
                            apresentation: this.presentation
                        }
                    })
                    .then(() => {
                        alert('Cadastrado com sucesso!')})
                    .catch(() => {
                        alert('Houve um erro ao se cadastrar')})

                } catch (error) {
                    if (error instanceof yup.ValidationError) {
                        console.log(error)

                        this.errors = captureErrorYup(error)
                    }
                }
            }
        },
        watch: {
            interest(NewValue, OldValue) {
                if (NewValue !== OldValue) {
                    this.skills = []
                }
            }
        }
    }
</script>

<style scoped>
.form-menu {
    margin: 20px auto;
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: left;

    padding: 10px 32px;
    border-radius: 8px;
}

.form-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.form-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
}

.input-box {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 100px;
    background-color: #D7CCC8;
    box-shadow: 1px 1px 1px black;
}
.message-erro {
    color: red;
    font-size: 12px;
}

.form-select {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 80px;
    background-color: #D7CCC8;
    box-shadow: 1px 1px 1px black;
}

.form-presentation {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 30px 80px;
    background-color: #D7CCC8;
    box-shadow: 1px 1px 1px black;
}

.form-button {
    width: 100%;
    margin-top: 16px;
    border: none;
    background: linear-gradient(80deg, #F48FB1, #BBDEFB);
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    color: black;
    font-weight: bold;

}
</style>