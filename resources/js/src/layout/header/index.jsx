import React,{useContext} from "react";
import { Container, Col, Row, Navbar,Nav } from "react-bootstrap"
import tomato from "../../icons/tomato-icon-small.png"
import {Context} from "../../store"
import {useTranslation} from 'react-i18next'
import { NavLink, useNavigate } from "react-router-dom";

function Header() {

    const [state,dispatch]=useContext(Context);
    const { t, i18n } = useTranslation();
    const navigate=useNavigate(); // for manual routing

    const handleLoginClick=()=>{
        dispatch({type:"authentication",payload:{showLogin:true}})
    }

	return (
			// implment header

		<>

				<Navbar bg="dark" variant="dark">
					<Container fluid>
						<Navbar.Brand style={{cursor:"pointer"}} onClick={()=>{navigate('/home')}}>
							<img
									alt=""
									src={tomato}
									width="30"
									height="30"
									className="d-inline-block align-top"
							/>{' '}
							{t('Knowledge Quotient')}
						</Navbar.Brand>
                        <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {state.user.type=='guest'&&
                                    <>{t('Guest')} </>
                                }
                                {state.user.type!='guest'&&
                                    <>Signed in as {state.user.username} &nbsp;&nbsp; | &nbsp;&nbsp;</>
                                }

                            </Navbar.Text>
                           {/*  <Nav>
                                <Nav.Link onClick={handleLoginClick}>
                                {state.user.type!='admin'&&
                                    <>Admin login</>
                                }
                                </Nav.Link>

                            </Nav> */}
                            </Navbar.Collapse>
					</Container>
				</Navbar>

					{/* <Row>
							<Col> (Need Some Icon here) Path Of Knowlede</Col>
							<Col> (some content if required)</Col>
							<Col> <NavLink key="login" to="/login">Home</NavLink> </Col>
					</Row>
					*/}


		</>

	);
}

export default Header;
