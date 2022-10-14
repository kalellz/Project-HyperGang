import axios from 'axios'

const api = axios.create({
	baseURL:'http://localhost:5000'
})

export async function Login(email,senha){
    const r = await api.post('user/login', {
        email: email,
        senha: senha
      });
      return r.data
}
export async function Logup(nome, sobrenome, email,senha){
  const r = await api.post('user/logup', {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha
    });
    return r.data
}