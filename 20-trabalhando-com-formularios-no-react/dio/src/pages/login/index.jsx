import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup.object({
  email: yup.string().email('E-mail invalido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  console.log(errors);

  // const onSubmit = data => console.log(data);

  // consumindo api com axios
  const onSubmit = async formData => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert('Email ou senha invalidos');
      }
    } catch (error) {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleClickSignIn = () => {
    navigate('/feed');
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts. dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desajadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              {/* <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} /> */}
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
};

export { Login };