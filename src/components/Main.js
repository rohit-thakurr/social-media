import {useState} from "react";
import styled from "styled-components";
import PostModal from "./PostModal";


const Main = (props) =>{

    const [showModal,setShowModal] = useState("close");

    const handleClick = (e) =>{
        e.preventDefault();
        if( e.target !== e.currentTarget){
            return;
        }

        switch(showModal){
            case"open":
                setShowModal("close");
                break;
            case "close":
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;
        }
    }

    return (
        <Container>
            <ShareBox> 
            
            <div>
                <img src="/images/user.svg" alt=""/>
                <button onClick = {handleClick}> Start a Post</button>
            </div>

            <div>
                <button>
                    <img src="/images/icons8-video-64.png" alt=""/>
                    <span> Photo </span>
                </button>

                <button>
                    <img src="/images/icons8-article-64.png" alt=""/>
                    <span> Video </span>
                </button>

                <button>
                    <img src="/images/icons8-video-64.png" alt=""/>
                    <span> Event </span>
                </button>

                <button>
                    <img src="/images/icons8-article-64.png" alt=""/>
                    <span> Article </span>
                </button>
            </div>

           </ShareBox>
        


    <div>
      <Article>
        <ShareActor>
            
                    <a>
                        <img src="./images/user.svg" alt="" />
                        <div>
                            <span> Title </span>
                            <span> Info </span>
                            <span> Date </span>
                        </div>
                    </a>

            <button>
                <img src="./images/three-dots-svgrepo-com.svg" alt=" not" />
            </button>
        
        </ShareActor>


        <Description> Description </Description>

        <SharedImg>
            <a>
                <img src="./images/kingfisher-2046453.jpg" alt="" />
            </a>
        </SharedImg>

        <SocialCounts>
            <li>
                <button>
                    <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                    <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                    <span> 75 </span>
                </button>
            </li>

            <li>
                <a>2 comments</a>
            </li>
        </SocialCounts>
        
    <SocialActions>

        <button>
            <img src="./images/icons8-facebook-like-50.png" alt="" />
            <span>Like</span>
        </button>

        <button>
            <img src="./images/icons8-comment-24.png" alt=""/>
            <span>Comments</span>
        </button>

        <button>
            <img src="./images/icons8-email-send-30.png" alt=""/>
            <span>Send</span>
        </button>

        <button>
            <img src="./images/icons8-share-30.png" alt=""/>
            <span>Share</span>
        </button>

    </SocialActions>

      </Article>
    </div>

    <PostModal showModal={showModal} handleClick={handleClick}/>
           
</Container>

    );
};

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 0 0 1px rgb( 0 0 0 / 15%) 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;

    div{
        button{
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size: 14px;
            line-height: 1.5px;
            min-height: 48px;
            background: transparent;
            border:none;
            display: flex;
            align-items:center;
            font-weight: 600;
        }

        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 8px 16px;

            img{
                width: 48px;
                border-radius: 50%;
                margin-left: 8px;
            }

            button{
                margin: 4px 10px;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0,0,0,0.15);
            }
        }

        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    width: 48px;
                    margin : 0 4px 0 -2px;
                }
                
                span{
                    color: #70b5f7;
                }
            }
        }
    }
`;

const Article = styled(CommonCard)`

    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const ShareActor = styled.div `
    padding-right: 40px;
    padding: 12px 16px 0;
    flex-wrap: nowrap;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;

        img{
            width: 48px;
            height: 48px;
        }

        & > div{
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden; 

            span{
                text-align:left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0,0,0,1);
                }

                &:nth-child(n+1){
                    font-size: 12px;
                    color: rgba(0,0,0,0.6);
                }
            }
        }
    }

    button{

        img{
            width: 24px;
            height: 24px;
        }
        position: absolute;
        right: 12px;
        top:0;
        background: transparent;
        border:none;
        outline: none;
    }

`; 

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg = styled.div`
    margin-top: 8px;
    width: 100%;
    display: block;
    position: relative;
    background-color: #f9fafb;

    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5cf;
    list-style: none;

    li{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;
        }
    }
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;

    button{
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        border:none;
        background-color: transparent;

        img{
            width: 24px;
            height: 24px;
        }
        @media(min-width : 768px){
            span{
                margin-left: 8px;
            }
        }
    }
`;

export default Main;