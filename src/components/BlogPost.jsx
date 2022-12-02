import '../assets/styles/components/blogposts.scss';
import DefaultImg from '../assets/img/defaultblogposts.png';

function BlogPosts(){

    return(
        <section>
            <h1 className="titleSection">Blog</h1>

            <div className="containerBlogPosts">
                <div className="cardBlogPost">
                    <div className="cardImageBlogPost">
                        <img src={DefaultImg} width={270}/>
                        <span>22 de janeiro de 2023</span>
                    </div>
                    <div className="cardContentBlogPost">
                        <h3>Como Iniciar no front-end do jeito certo</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <span>Author: Jonas Santos</span>
                        <div className="actionCardBlogPost">
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogPosts;