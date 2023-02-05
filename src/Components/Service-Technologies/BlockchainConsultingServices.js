import React from "react";
import Footer from "../Footer";
import Header from "../header";

import service10 from "../../assets/images/resource/service-10.png";
import transparency from '../../assets/images/blockChain_icons/bch-transparency--icon.svg'
import control from '../../assets/images/blockChain_icons/bch-take-control--icon.svg'
import secure from '../../assets/images/blockChain_icons/bch-secure-data--icon.svg'
import save from '../../assets/images/blockChain_icons/bch-save-time--icon.svg'
import estimate from '../../assets/images/blockChain_icons/bch-estimate--icon.svg'
import completness from '../../assets/images/blockChain_icons/bch-completness--icon.svg'
import wallet from '../../assets/images/blockChain_icons/bch-wallet--icon.svg'
import pnpblockchain from '../../assets/images/blockChain_icons/bch-pnpblockchain--icon.svg'
import migration from '../../assets/images/blockChain_icons/bch-migration--icon.svg'
import distributed from '../../assets/images/blockChain_icons/bch-distributed--icon.svg'
import contracts from '../../assets/images/blockChain_icons/bch-contracts--icon.svg'
import blockchain from '../../assets/images/blockChain_icons/bch-blockchain-consult--icon.svg'
import blockchain_works from '../../assets/images/blockChain_icons/blockchain-works--img.webp'
import solidity from '../../assets/images/blockChain_icons/bch-solidity--logo.svg'
import ripple from '../../assets/images/blockChain_icons/bch-ripple--logo.svg'
import opechain from '../../assets/images/blockChain_icons/bch-opechain--logo.svg'
import multichain from '../../assets/images/blockChain_icons/bch-multichain--logo.svg'
import kaleido from '../../assets/images/blockChain_icons/bch-kaleido--logo.svg'
import ipfs from '../../assets/images/blockChain_icons/bch-ipfs--logo.svg'
import iota from '../../assets/images/blockChain_icons/bch-iota--logo.svg'
import hyperledger from '../../assets/images/blockChain_icons/bch-hyperledger--logo.svg'
import ethereum from '../../assets/images/blockChain_icons/bch-ethereum--logo.svg'
import corda from '../../assets/images/blockChain_icons/bch-corda--logo.svg'
import coinfirm from '../../assets/images/blockChain_icons/bch-coinfirm--logo.svg'
import bigchain from '../../assets/images/blockChain_icons/bch-bigchain--logo.svg'
import iroha from '../../assets/images/blockChain_icons/bch-iroha--logo.svg'
import fitr from "../../assets/images/case-study/fitr-training.png";
import circlepod from "../../assets/images/case-study/circlepod.png";
import coachr from "../../assets/images/case-study/coachr.png";
import hardassetsalliance from "../../assets/images/case-study/hardassetsalliance.png";
import proctorgallagher from "../../assets/images/case-study/proctorgallagher_2.png";
import taskrabbit from "../../assets/images/case-study/taskrabbit.png";
import wayfair from "../../assets/images/case-study/wayfair.png";
import distropro from "../../assets/images/case-study/distropro.png";
import predictionstrike from "../../assets/images/case-study/predictionstrike.png";
import { Link } from "react-router-dom";

export default function BlockchainConsultingServices() {
  return (
    <>
      <div class="page-wrapper">
        <Header />
        <section class="top-container banner-section-five">
          <div class="auto-container">
            <div class="row clearfix">
              <div class="content-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <p
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "20px",
                      paddingBottom: "5px",
                      marginBottom: "20px",
                      color: "#212529",
                      marginTop: "0",
                    }}
                  >
                    <span
                      style={{
                        content: "",
                        width: "35px",
                        height: "2px",
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        background: "#2569e6",
                        WebkitTransform: "translateY(-50%)",
                        transform: "translateY(-50%)",
                      }}
                    />
                    Blockchain
                  </p>
                  <h2>Delivering Robust Software Systems With Blockchain.</h2>
                  <div class="text">
                    Helping you boost performance, productivity, and security.
                  </div>
                  <Link
                    to='/contact'
                    style={{ textDecoration: "none" }}
                    class="btn-style-one theme-btn"
                  >
                    Get a Proposal
                  </Link>
                </div>
              </div>
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image">
                    <img src={service10} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="service-section">
          
          <div class="container">
            
            <div class="offer-title">
              
              <h2 class="home-heading-two">Why Blockchain?</h2>
            </div>
            <div class="offer-cards">
              <div class="card">
                
                <img
                  alt="Save Time"
                  src={save}
                />
                <h3>Save Time and Operational Costs</h3>
                <p>
                  Blockchain tech allows for allows for verification without
                  having to be dependent on redundant processes and third
                  parties.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Eliminate the Middle Man"
                  src={estimate}
                />
                <h3>Eliminate the Middle Man</h3>
                <p>
                  Blockchain helps you take control of your transactions and
                  saves you the hassle of employing a middle man.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Data Secure"
                  src={secure}
                />
                <h3>Make your Data Secure</h3>
                <p>
                  The tech removes the risk of duplicate entry or fraud as
                  multiple consensus protocols need to be fulfilled to validate
                  an entry.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Transparency"
                  src={transparency}
                />
                <h3>Ensure high Level of Transparency</h3>
                <p>
                  Transactions are recorded across every participating node in
                  the Blockchain, which helps ensure transparency to each
                  participant.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Take control Info"
                  src={control}
                />
                <h3>Take control of your Information</h3>
                <p>
                  Consent of all ledger participants is needed to add records to
                  the chain, which means every stakeholder gets a say in major
                  decisions.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Completeness"
                  src={completness}
                />
                <h3>Ensure Completeness of Data</h3>
                <p>
                  Blockchain's append only property makes data alteration or
                  deletion impossible, helping you maintain its accuracy at all
                  times.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="offer-section nitro-offscreen">
          
          <div class="container">
            
            <div class="offer-title">
              
              <h2 class="home-heading-two">Services We Offer</h2>
            </div>
            <div class="offer-cards">
              
              <div class="card">
                
                <img
                  alt="Public and Private Blockchains"
                  src={pnpblockchain}
                />
                <h3>Public and Private Blockchains</h3>
                <p>
                  With Public and Private Blockchain options, you get to control
                  who has access to specific information.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Wallets and Exchanges"
                  src={wallet}
                />
                <h3>Wallets and Exchanges</h3>
                <p>
                  We help you build safe Cryptocurrency wallets and exchanges to
                  conduct trade seamlessly without hurdles.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Distributed Applications"
                  src={distributed}
                />
                <h3>Distributed Applications</h3>
                <p>
                  Our Decentralized Applications development service helps keep
                  records tamper-proof and free of intrusions.
                </p>
              </div>
              <div class="card">
                <img
                  alt="Testing &amp; Migration"
                  src={migration}
                />
                <h3>Testing &amp; Migration</h3>
                <p>
                  We help you migrate your existing business into Blockchain and
                  define a testing and migration roadmap.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Smart Contracts"
                  src={contracts}
                />
                <h3>Smart Contracts</h3>
                <p>
                  We use Blockchain platforms like Etherium to deliver highly
                  secure, and competitive Smart Contracts.
                </p>
              </div>
              <div class="card">
                
                <img
                  alt="Blockchain Consultancy"
                  src={blockchain}
                />
                <h3>Blockchain Consultancy</h3>
                <p>
                  By analyzing your business infrastructure, we identify threats
                  Blockchain can counter and opportunities it can address.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rtt-section">
          <div className="container text-btn">
            <h2 className="home-heading-two">
              Let's co-create the right IT solution for your business.
            </h2>
            <a className="custo-btn" id="stylebtn">
              Let's Talk
            </a>
          </div>
        </section>

        <section class="bch-works nitro-offscreen">
          <div class="container">
            
            <div class="offer-title bchworks">
              
              <h2 class="home-heading-two heading-read">
                How blockchain works?
              </h2>
            </div>
            <div class="bch-works-wrap">
              
              <div class="works-text">
                
                <div>
                  <span>1</span>
                  <li>Transaction Request is Made</li>
                </div>
                <div>
                  <span>2</span>
                  <li>A Block representing the Transaction is created</li>
                </div>
                <div>
                  <span>3</span>
                  <li>The Block is sent to every Node on the Network.</li>
                </div>
                <div>
                  <span>4</span>
                  <li>The Block is added to the existing Blockchain.</li>
                </div>
                <div>
                  <span>5</span>
                  <li>Transaction is validated by every Node.</li>
                </div>
                <div>
                  <span>6</span>
                  <li>Transaction is Completed.</li>
                </div>
              </div>
              <div class="works-img">
                
                <img
                  alt="Blockchain Works"
                  src={blockchain_works}
                />
              </div>
            </div>
          </div>
        </section>

        <section class="iot-features nitro-offscreen">
          <div class="container">
            
            <div class="ms-service-title">
              
              <h2 class="home-heading-two">Tech Stacks</h2>
            </div>
            <div class="iot-features-img">
              
              <img
                alt="iota"
                src={iota}
              />
              <img
                alt="solidity"
                src={solidity}
              />
              <img
                alt="ripple"
                src={ripple}
              />
              <img
                alt="opechain"
                src={opechain}
              />
              <img
                alt="multichain"
                src={multichain}
              />
              <img
                alt="kaleido"
                src={kaleido}
              />
              <img
                alt="ipfs"
                src={ipfs}
              />
              <img
                alt="iroha"
                src={iroha}
              />
              <img
                alt="bigchain"
                src={bigchain}
              />
              <img
                alt="coinfirm"
                src={coinfirm}
              />
              <img
                alt="corda"
                src={corda}
              />
              <img
                alt="ethereum"
                src={ethereum}
              />
              <img
                alt="hyperledger"
                src={hyperledger}
              />
            </div>
          </div>
        </section>
        <section className="case-section">
          <div className="circle-layer"></div>
          <div className="circle-layer-two"></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <h2>Featured Work</h2>
            </div>
            <div className="row clearfix">
              
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={predictionstrike} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Prediction Strike
                    </Link>
                  </h3>
                </div>
              </div>
            <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={circlepod} alt="" />
                  </div>
                  <h3>
                    <Link
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Circle POD
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="case-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">
                    <div className="color-circle"></div>
                    <img src={hardassetsalliance} alt="" />
                  </div>
                  <h3>
                    <Link 
                      to="/case-studies"
                      style={{ textDecoration: "none", color: "black"  }}
                    >
                      Hard Assets Alliance{" "}
                    </Link>
                  </h3>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
