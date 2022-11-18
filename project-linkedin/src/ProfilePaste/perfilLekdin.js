import './Perfprofile.css';
import Navegador from '../navRotas';
import { FaLinkedin, FaSatelliteDish } from 'react-icons/fa'
import { BiPencil } from "react-icons/bi"
import { AiFillCamera } from 'react-icons/ai'
import { BsFillEyeFill } from 'react-icons/bs'
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import Header from '../FeedPaste/Header';
import Componente00 from './Componente00';

function PerfilLink() {
    return (
        <div>
            <Header />
            <body >
                <div className="Box-header">
                    <header className="Box-PerfilP">
                        <div>
                            <img className='Img-capa' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwZigZ-t3pYvo5IWMphNPJ-GeSSFxRuLfDg&usqp=CAU" alt="fundo"></img>
                        </div>
                        <AiFillCamera className='Icone-cam' />
                        <img className='Foto-Profile' src="https://media-exp1.licdn.com/dms/image/D4D03AQGhxK0UUHAlaA/profile-displayphoto-shrink_400_400/0/1665710465997?e=1671667200&v=beta&t=NZT4T_OsV-Ck5kVL9h5dCmG4GeslzQl90_i3sAZfVTo" alt='foto de perfil'></img>
                        <div className='Box-tudoerrado'>
                            <div className='Name-pronome'>
                                <h1>Luiz Felipe</h1>
                                <span>(Ele)</span>
                            </div>
                            <FaLinkedin className='Icone-Premium' />
                            <BiPencil className='Icone-pencil' />
                            <div className='Box-carglo'>
                                <h4>Desenvolvedor Full-Stack Java | Git-Github</h4>
                                <span className='Ender-inf'> Camaragibe, Pernambuco, Brasil </span>
                                <a className='Contact' href="google.com">Informações de contato</a>
                                <span className='Conect'>8.532 seguidores.+ de 500 conexões</span>
                            </div>
                            <div className='Box-bottom'>
                                <button className='Bottons-pro'>Tenho interesse em...</button>
                                <button className='Bottons-pro2'>Adicionar seção do perfil</button>
                                <button className='Bottons-pro3'>Mais</button>
                            </div>
                            <section className='Section-empre'>
                                <p className='Section-p'><strong>Demonstre aos recrutadores que você está buscando emprego;</strong>
                                    você controla quem pode ver isso.   <a className='Section-a' href='nolink'>Comece já</a>  </p>

                            </section>
                        </div>
                    </header>
                    <div className='Box-Analise'>
                        <article>
                            <div className='Anali-prin'>
                                <h3>Análise</h3>
                                <BsFillEyeFill className='Anali-icon' />
                                <span>Exibido apenas para você</span>
                            </div>
                            <div className='Box-anali-principal'>
                                <div className='Box-anali-1'>

                                    <h3><GroupIcon className='Box-anali-1-icon' />35 visualizações do perfil</h3>
                                    <p> Saiba quem viu seu perfil.</p>
                                </div>
                                <div className='Box-anali-2'>
                                    <h3><BarChartIcon className='Box-anali-2-icon' />23 impressões das <br></br>publicações</h3>
                                    <p> Confira quem está interagindo<br></br> com suas publicações.</p>
                                </div>
                                <div className='Box-anali-3'>
                                    <h3> <SearchIcon className='Box-anali-3-icon' />10 corrências em <br></br> resultados de pesquisa</h3>
                                    <p> Veja a frequência com que seu <br></br> perfil é exibido em resultados<br></br> de pesquisa.</p>
                                </div>
                            </div>
                        </article>
                        <div className='Recurses'>
                            <article>
                                <div className='Recurses-p'>
                                    <h3>Recursos</h3>
                                    <BsFillEyeFill className='Recurses-icon' />
                                    <span>Exibido apenas a você</span>
                                </div>
                                <div className='Recurses-box-one'>
                                    <h3><FaSatelliteDish /> Modo de criação</h3>
                                    <span className='Recurses-box-one-span'>Desativado</span>
                                    <span className='Recurses-box-one-span2'>Destaque-se, exiba conteúdos no seu perfil e tenha acesso a ferramentas de criação de
                                        conteúdos</span>
                                </div>
                                <div className='Recurses-box-one2'>
                                    <h3><GroupIcon /> Minha rede</h3>
                                    <span className='Recurses-box-one-span3'>Veja e gerencie suas conexões e interesses.</span>


                                </div>
                            </article>
                        </div>

                        <div className='Biogra'>
                            <article>
                                <div className='Box-Sobre'>
                                    <h3 className='Sobre-title'>Sobre</h3>
                                    <BiPencil className='Sobre-pencil'/>
                                    <span className='Sobre-text'>Acadêmico em Ciência da Computação.</span>
                                </div>
                            </article>
                        </div>
                    </div>
                    <footer className='Rodape'>
                        <ul className='List-rodape'>
                            <ol className='Par-rodape'>Sobre</ol>
                            <ol className='Par-rodape'>Diretrizes da Comunidade</ol>
                            <ol className='Par-rodape'>Termos e Privacidade</ol>
                            <ol className='Par-rodape'>Soluções de Vendas</ol>
                            <ol className='Par-rodape'>Central de Segurança</ol>
                        </ul>
                        <ul>
                            <ol className='Par-rodape2'>Acessibilidade</ol>
                            <ol className='Par-rodape2'>Carreiras</ol>
                            <ol className='Par-rodape2'>Preferências de anúncios</ol>
                            <ol className='Par-rodape2'>Para celular</ol>
                        </ul>
                        <ul>
                            <ol className='Par-rodape3'>Soluções de talentos</ol>
                            <ol className='Par-rodape3'>Soluções de Marketing</ol>
                            <ol className='Par-rodape3'>Publicidade</ol>
                            <ol className='Par-rodape3'>Pequenas empresas</ol>
                        </ul>
                    </footer>
                </div>
                <Componente00 />
            </body>
        </div>
    )
}
export default PerfilLink;