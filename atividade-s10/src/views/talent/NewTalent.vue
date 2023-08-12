<template>
    <form class="form_login">
        <div class="form_input">
            <div class="input_box">
                <label for="name">Nome completo</label>
                <input class="form_box" type="text" id="name" v-model="name"/>
            </div>
            <div class="input_box">
                <label for="email">Email</label>
                <input class="form_box" type="text" id="email" v-model="email"/>
            </div>
            <div class="input_box">
                <label for="birthday">Data de Nascimento</label>
                <input class="form_box" type="date" id="birthday" v-model="birthday"/>
            </div>
            <div class="input_box">
                <label for="contact">Whatsapp</label>
                <input class="form_box" type="text" id="contact" v-model="contact"/>
            </div>
        </div>
        <div>
            <label for="interest">Área de interesse</label>
            <select class="form_size" id="interest" v-model="interest">
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
            </select>
        </div>
        <div>
            <label for="level">Nivel profissional</label>
            <select class="form_size" id="level" v-model="level">
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
            <input class="form_presentation" type="text" id="presentation" placeholder="Digite aqui sua carta de apresentação" />
        </div>
        <button class="form_button" type="submit">Cadastrar</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                birthday: '',
                contact: '',
                interest: '',
                level: '',
                skills: ['HTML', 'CSS3', 'Javascript', 'React','React-native', 'Node']
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
.form_login {
    margin: 20px auto;
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 1.1rem;

    padding: 10px 32px;
    border-radius: 8px;
}

.form_input {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.input_box {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

.form_box {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 100px;
    background-color: #636fa45b;
    box-shadow: 1px 1px 1px #6464641c;
}
.form_size {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px 80px;
    background-color: #636fa45b;
    box-shadow: 1px 1px 1px #6464641c;
}

.form_presentation {
    display: flex;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 30px 80px;
    background-color: #636fa45b;
    box-shadow: 1px 1px 1px #6464641c;
}

.form_button {
    width: 100%;
    margin-top: 16px;
    border: none;
    background: linear-gradient(45deg, #E8CBC0, #636FA4);
    color: #1B2029;
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
}
</style>