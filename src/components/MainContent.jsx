import '../assets/styles/components/maincontent.scss';
import MySkills from './MySkills';
import Projects from './Projects';
import BlogPosts from './BlogPost';
import Contact from './Contact';

function MainContent(){
    return (
        <section id="mainContent">
            <h1>Jonas Santos</h1>
            <span className="profession">Web Developer</span>

            <p>&nbsp;&nbsp;&nbsp;
                Olá, prazer em ver você por aqui!!!!
            </p>
            <p>&nbsp;&nbsp;&nbsp;
                Olá, meu nome é Jonas Santos tenho 25 anos e sou do interior de São Paulo.
            Sou desenvoldedor Web Full Stack, estudante de Analise e Desenvolvimento de Sistemas e apaixonado por tecnologia e por aprender coisas novas,
            gosto de estar envolvido no desenvolvimento de aplicações desde a prototipação até a implementação.
            .
            </p>
            <MySkills/>
            <Projects/>
            <BlogPosts/>
            <Contact/>
        </section>
    );
}

export default MainContent;