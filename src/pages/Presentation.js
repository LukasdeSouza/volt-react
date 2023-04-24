import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";

import pages from "../data/pages";
import features from "../data/features";

export default () => {
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">LS Software</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Pages</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">Folder Structure</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Upgrade to Pro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">LS Software Dashboard</h1>
              <p className="text-muted fw-light mb-5 h5">Open source powered by Themesberg</p>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={Routes.DashboardOverview.path} className="text-dark me-3">
                  Ver Dashboard <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
                <GitHubButton className="mt-lg-2" href="https://github.com/themesberg/volt-react-dashboard" data-size="large" data-show-count="true" aria-label="Star themesberg/volt-react-dashboard on GitHub">Star</GitHubButton>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <a href="https://themesberg.com" target="_blank">
                    <Image src={ThemesbergLogoIcon} height={25} width={25} className="mb-3" alt="Themesberg Logo" />
                    <p className="text-muted font-small m-0">A Themesberg production</p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">10</h3>
              <p className="text-gray">Páginas de Exemplo</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">100+</h3>
              <p className="text-gray">Componentes React</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & React-App</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">Framework CSS</p>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Desenvolvido com React.js</h2>
              <p className="mb-3 lead fw-bold">A biblioteca front-end mais famosa do mundo</p>
              <p className="mb-4">O Volt React é um modelo de painel de administração criado usando componentes React.js usando ganchos de reação e uma estrutura orientada a dados que pode iniciar seu aplicativo rapidamente.</p>
              <Button as={Link} to={Routes.DashboardOverview.path} variant="secondary" target="_blank">Demonstração <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
              <Button as={HashLink} to="#download" variant="outline-primary" className="ms-3"><FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Falar com Vendas</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2>Components Reutilizáveis</h2>
              <p className="mb-3 lead fw-bold">Mais de 100 componentes de interface do usuário baseados no Bootstrap 5</p>
              <p className="mb-4">Construímos mais de 100 componentes baseados em React.js para serem usados ​​em todo o seu sistema, economizando seu tempo inicializando seu projeto.</p>
              <p className="mb-4">Confira os componentes e use nosso editor de componentes React.js ao vivo para testar o código.</p>
              <Button as={Link} to={Routes.Forms.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank"><FontAwesomeIcon icon={faReact} className="me-1" />Exemplo de Componentes</Button>
            </Col>
            <Col lg={6} className="rounded shadow pt-3">
              <Code scope={{ Form, Button }} code={`<Form>
  <Form.Group id="frameworks" className="mb-3">
    <Form.Label>Example select</Form.Label>
    <Form.Select>
      <option defaultValue>Open this select menu</option>
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Form.Select>
  </Form.Group>
  <Button variant="primary" className="m-1">Primary</Button>
</Form>`} language="jsx" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2 className="d-flex align-items-center">Mapbox <Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">Integração de marcadores e cartões com Leaflet.js</p>
              <p className="mb-4">Você pode usar este mapa para adicionar marcadores com cartões personalizados e mostrá-los em um mapa usando nossa integração MapBox personalizada com Leaflet.js</p>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/map" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faMapMarkedAlt} className="me-2" />Mapa Demo</Button>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/plugins/map" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guia</Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={MapboxImg} alt="MapBox Leaflet.js Custom Integration Mockup" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5}>
              <h2 className="d-flex align-items-center">Calendario<Badge pill bg='secondary' text="dark" className="badge-md ms-3 mb-0 fs-6">Pro</Badge></h2>
              <p className="mb-3 lead fw-bold">
                Integração FullCalendar.js avançada
              </p>
              <p className="mb-4">
                Criamos um calendário totalmente editável onde você pode adicionar, editar e excluir eventos para seu painel de administração.
              </p>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/calendar" className="me-3" variant="secondary" target="_blank"><FontAwesomeIcon icon={faCalendarAlt} className="me-2" />Calendario Demo</Button>
              <Button href="https://demo.themesberg.com/volt-pro-react/#/plugins/calendar" variant="outline-primary" target="_blank"><FontAwesomeIcon icon={faBook} className="me-2" /> Guia</Button>
            </Col>
            <Col lg={6}>
              <Image src={CalendarImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} className="order-lg-2 mb-5 mb-lg-0">
              <h2>Bootstrap 5</h2>
              <p className="mb-3 lead fw-bold">
                Última versão do Bootstrap 5
              </p>
              <p className="mb-4">
                Volt React é construído usando a versão mais recente do Bootstrap 5 e usamos apenas Vanilla Javascript para tudo, incluindo os plugins
              </p>
            </Col>
            <Col lg={6} className="col-lg-6 order-lg-1">
              <Image src={BS5IllustrationsImg} alt="Front pages overview" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-sm pt-0" id="pages">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">
                10 páginas feitas a mão
              </h2>
              <p className="lead px-lg-10">
                Cada página do Volt foi cuidadosamente construída para fornecer todas as páginas necessárias que sua inicialização exigirá
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            {pages.map(page => <PagePreview key={`page-${page.id}`} {...page} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary text-white">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">Incríveis Features</h2>
              <p className="lead px-lg-8">Você obtém todos os componentes do React.js totalmente personalizados. Além disso, você recebe vários plugins prontos para uso.</p>
            </Col>
          </Row>
          <Row>
            {features.map(feature => <Feature key={`features-${feature.id}`} {...feature} />)}
          </Row>
        </Container>
      </section>
      <section className="section section-lg line-bottom-soft" id="folder">
        <Container>
          <Row className="justify-content-center mb-5 mb-lg-6">
            <Col xs={12} className="text-center">
              <h2 className="px-lg-5">O que há no projeto?</h2>
              <p className="lead px-lg-8">Criamos cuidadosamente a estrutura de pastas perfeita para garantir que os arquivos que você está procurando sejam facilmente acessíveis e bem organizados.</p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center">
            <Col xs={12} lg={6} className="mb-4">
              <div className="d-none d-lg-block mt-5">
                <h4>A estrutura de pastas perfeita para o seu projeto</h4>
                <p className="lead mb-4">A estrutura de pastas é baseada no popular <code>create-react-app</code> utilizando arquivos Sass para pre-processar o CSS.</p>
                <Button as={Link} variant="secondary" size="md" to={Routes.DocsFolderStructure.path} target="_blank" className="text-dark">
                  <FontAwesomeIcon icon={faCodeBranch} className="me-2" /> Estrutura de Pastas
                </Button>
              </div>
            </Col>
            {/* <Col xs={12} lg={6} className="order-lg-first d-flex justify-content-center">
              <ListGroup className="d-block fmw-100 list-style-none folder-structure">
                <FolderItem name="src" tooltip="Main folder that you will be working with" />

                <ListGroup className="list-style-none ps-4">
                  <FolderItem name="assets" tooltip="CSS, Images, Fonts and Javascript" />
                  <FolderItem name="components" tooltip="Custom React.js components on top of react-bootstrap" />
                  <FolderItem name="data" tooltip="Data source for the dashboard and components" />
                  <FolderItem name="pages" tooltip="React.js admin dashboard pages" />
                  <FolderItem name="scss" tooltip="Sass source files" />
                  <FolderItem name="index.js" tooltip="Main React.js file that wraps the project" icon={faJs} iconColor="secondary" />
                  <FolderItem name="routes.js" tooltip="The file where the routes are registered at" icon={faJs} iconColor="secondary" />
                </ListGroup>

                <FolderItem name="build" tooltip="The production build of the project" />
                <FolderItem name="node_modules" tooltip="Project dependencies from package.json" />

                <FolderItem name="package.json" tooltip="Project details and dependencies." icon={faFileCode} iconColor="tertiary" />
                <FolderItem name="README.md" tooltip="No project can miss a README :)" icon={faFileCode} iconColor="tertiary" />
                <FolderItem name=".gitignore" tooltip="This file ensures that generated files and folder are ignored by Git. (eg. node_modules)" icon={faFileCode} iconColor="tertiary" />
              </ListGroup>
            </Col> */}
            <Col xs={12} className="mt-5 d-lg-none">
              <h5>A estrutura de pastas perfeita para o seu projeto</h5>
              <p className="lead mb-4">A estrutura de pastas é baseada no popular <code>create-react-app</code> utilizando arquivos Sass para pre-processar o CSS.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section section-lg bg-primary" id="getting-started">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
                Menos <span className="fw-bold">trabalho</span>, mais <span className="fw-bold">fluxo</span>.
              </h2>
              <p className="lead px-lg-8">
                Aumente a produtividade com o BrowserSync. As alterações sass são refletidas instantaneamente e as páginas rolam e são atualizadas nos dispositivos enquanto você trabalha.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10} xl={9}>
              <div className="position-relative">
                <div className="rounded bg-white p-4 text-dark mb-2">
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn install <span className="text-gray-600">(ou npm install)</span></div>
                    <div className="text-gray">Tudo instalado!</div>
                  </div>
                  <div className="mb-3">
                    <div className="fw-bold">&gt; $ yarn start <span className="text-gray-600">(ou npm run start)</span></div>
                    <div className="text-gray">SCSS observando</div>
                    <div className="text-gray">Abrindo localhost:3000</div>
                  </div>
                  <div>
                    <div className="fw-bold">&gt; $ é isso?</div>
                    <div className="text-gray">Simples assim!</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white text-center mb-0">
                Não está familiarizado? Não se preocupe! Nossa <Link to={Routes.DocsQuickStart.path} className="text-white text-underline fw-bold" target="_blank">documentação</Link> pode te ajudar.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="section section-lg bg-white" id="download">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <h2 className="fw-light mb-3">Download or upgrade to pro</h2>
              <p className="lead mb-4 me-lg-6">Do you want to take React development to the next level? Check out the premium version of Volt React Dashboard in the following comparison table.</p>
            </Col>
            <Col xs={12} lg={4}>
              <div className="github-big-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </Col>
          </Row>
          <Row className="mt-6">
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Free version</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>100</strong> React Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>10</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> Advanced Sidebar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> MapBox
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> Calendar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> SVG Map
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> Widgets
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0 pb-0">
                      <FontAwesomeIcon icon={faTimesCircle} className="text-danger me-2" /> Premium Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Button href="https://themesberg.com/product/dashboard/volt-react" target="_blank" variant="primary" className="w-100 m-0 mt-3 mb-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
              <Card border="light" className="p-4 py-5 mt-lg-n5">
                <Card.Header className="bg-white border-0 pb-0">
                  <span className="d-block">
                    <h2 className="text-primary fw-bold align-top">Pro Version</h2>
                  </span>
                </Card.Header>
                <Card.Body>
                  <ListGroup className="list-group-flush price-list">
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>200+</strong> React Components
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>20</strong> Example Pages
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <strong>6</strong> Plugins
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Advanced Sidebar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> MapBox
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Calendar
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> SVG Map
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 ps-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Widgets
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-white border-0 border-0 ps-0 pb-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Premium Support
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Button href="https://demo.themesberg.com/volt-pro-react/#/" target="_blank" variant="secondary" className="w-100 m-0 mt-3">Demo Volt React Pro <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}
      <footer className="footer py-6 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                <Image src={ReactHero} />
                <span className="ms-2 brand-text">LS Software</span>
              </Navbar.Brand>
              <p>Volt React é um modelo de painel de administração gratuito e de código aberto desenvolvido com React.js e Bootstrap 5.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Themesberg</span>
              <ul className="links-vertical mt-2">
                <li><Card.Link target="_blank" href="https://themesberg.com/blog">Blog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/products">Produtos</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/about">Sobre Nós</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/contact">Entre em Contato</Card.Link></li>
              </ul>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Other</span>
              <ul className="links-vertical mt-2">
                <li>
                  <Card.Link as={Link} to={Routes.DocsQuickStart.path} target="_blank">Iniciando</Card.Link>
                </li>
                <li><Card.Link as={Link} to={Routes.DocsChangelog.path} target="_blank">Changelog</Card.Link></li>
                <li><Card.Link target="_blank" href="https://themesberg.com/licensing">Licença</Card.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Se Inscreva</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Se Inscrever</span>
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-muted font-small m-0">We’ll never share your details. See our <Card.Link className="text-white" href="#">Privacy Policy</Card.Link></p>
            </Col>
          </Row>
          <hr className="bg-gray my-5" />
          <Row>
            <Col className="mb-md-2">
              <Card.Link href="https://themesberg.com" target="_blank" className="d-flex justify-content-center">
                <Image src={ThemesbergLogo} height={35} className="d-block mx-auto mb-3" alt="Themesberg Logo" />
              </Card.Link>
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © Themesberg 2019-<span className="current-year">2021</span>. All rights reserved.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
