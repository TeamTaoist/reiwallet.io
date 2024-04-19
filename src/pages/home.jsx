import Left from "../components/left.jsx";
import About from "../components/about.jsx";
import Documents from "../components/documents.jsx";
import Home from "../components/home.jsx";

export default function HomePage(){
    return <>
        <Left />

        <div className="main-left" id="main">
            <div className="pt-wrapper">
                <div className="subpages">
                    <section id="home" className="pt-page pt-page-1" data-id="home">
                        <Home />
                    </section>

                    <section id="about" className="pt-page pt-page-2" data-id="about">
                        <About />
                    </section>


                    <section id="services" className="pt-page pt-page-3" data-id="services">
                        <Documents />
                    </section>


                    <section id="portfolio" className="pt-page pt-page-4" data-id="portfolio">
                        <div className="container">
                            portfolio
                        </div>
                    </section>


                    <section id="clients" className="pt-page pt-page-5" data-id="clients">
                        <div className="container">
                            clients
                        </div>
                    </section>


                    <section id="contact" className="pt-page pt-page-6" data-id="contact">
                        <div className="container">
                            contact
                        </div>
                    </section>

                </div>


            </div>

        </div>
    </>
}
