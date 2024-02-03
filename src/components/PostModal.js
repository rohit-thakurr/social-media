import styled from "styled-components";
import ReactPlayer from "react-player";
import {useState} from "react";
import { startTransition } from "react";
import { connect } from "react-redux";

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage,setShareImage] = useState("");
    const [videoLink,setVideoLink] = useState("");
    const [assetArea,setAssetArea] = useState("");


    const handleChange = (e) => {
        const image = e.target.files[0];

        if( image === "" || image === undefined){
            alert( 'not an image, the files is a ${typeof image}');
            return;
        }
        setShareImage(image);
    }

    const switchAssetArea = (area) =>{
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    }

    const reset = (e) =>{
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e);
    }


    return(
    <> {

        props.showModal === "open" &&
        <Container>
            <Content>
                <Header>
                    <h2>Create a Post</h2>
                    <button onClick={(event)=> reset(event)}>
                        <img src="./images/icons8-close-30.png" alt=""/>
                    </button>
                </Header>

                <SharedContent>
                    <UserInfo>
                        <img src="./images/user.svg" alt=""/>
                        <span>Name</span>
                    </UserInfo>
                    <Editor>
                        <textarea value={editorText} 
                        onChange= {(e) => setEditorText(e.target.value)}
                        placeholder="What do you want 2 talk about"
                        autoFocus={true}>
                        </textarea>

                    {   assetArea === "image" ? (
                        <UploadImage>
                            <input type = "file" 
                                except = "image/gif , image/jpeg , image/png"
                                name = "image"
                                id = "file"
                                style = {{display : "none"}}
                                onChange = {handleChange}
                            />

                            <p> <label htmlFor = "file"> Select an Image to share </label></p>  
                            {shareImage && <img src= {URL.createObjectURL(shareImage)} /> }

                         </UploadImage>
                    ) : ( assetArea === "media" &&
                         
                           
                             <>
                                <input type = "text"
                                    placeholder="Please input a Video Link"
                                    value= {videoLink}
                                    onChange = { (e) => setVideoLink(e.target.value)} />
                                
                                { videoLink && ( <ReactPlayer width={"100%"} url = {videoLink} />)}
                             </>
                        )
                    }
                       
                    </Editor>
                </SharedContent>

                <ShareCreation>
                    <AttachAssets>
                        <AssetButton onClick = { () => switchAssetArea("image")}>
                            <img src="./images/icons8-share-48.png" alt=""/>
                        </AssetButton>

                        <AssetButton onClick={ () => switchAssetArea("media")}>
                            <img src="./images/icons8-video-50.png" alt=""/>
                        </AssetButton>

                    </AttachAssets>

                    <ShareComment>
                        <AssetButton>
                            <img src="./images/icons8-comments-64.png" alt=""/>
                            Comment
                        </AssetButton>
                    </ShareComment>

                    <PostButton disabled = { !editorText ? true : false}>
                        Post
                    </PostButton>
                </ShareCreation>
            </Content>
        </Container>
    } </>
    )
};

const Container = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:9999;
    color: black;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn 0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top:32px;
    margin: 0 auto;
`;


const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        height: 45px;
        width: 45px;
        min-width: auto;
        color: rgba(0,0,0,0.15);
        svg,
        img{
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;


const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 45px;
    width: auto;
    color: rgba(0,0,0,0.5);
    border: none;
    &:hover{
        border: solid 2px black;
    }
`;
   
const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton} {
        width: 60px;
        background-color: white;
        img{
            width: 40px;
            height:40px;
        }
    }
`;

const ShareComment = styled.div`
    padding: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);

    ${AssetButton} {
        background-color: rgba(0,0,0,0);
        svg{
            margin-right : 5px;
        }

        img{
            width: 40px;
            height:40px;
        }
    }
`;

const PostButton = styled.button`
    position: relative;
    top: 10px;
    min-width: 60px;
    height : 40px;
    border-radius: 20px;
    padding-right: 16px;
    padding-left: 16px;
    background: ${ (props) =>( props.disabled ? "grey" : "#0a66c2" )};
    color: ${ (props) => (props.disabled ? "white" : "black")};

    /* background: #0a66c2;
    color : white; */

    &:hover{
        /* background-color: ${ props => ( props.disabled ? "rgba(0,0,0,0.08" : "#004182" ) }; */
        background-color: #004182;
        color: white;
    }
`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        
    }   

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
        font-weight: 400;
        color:black;
    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;
    }
`;

const mapStateToProps = (state) =>{
    return {
        user : state.userState.user,
    }
};

const mapDispatchToProps = (dispatch) => ( {});


export default connect(mapStateToProps,mapDispatchToProps)(PostModal);