import React from 'react'
import * as S from './style'

export function Footer() {
    return (
        <S.Container>

            <S.BoxList>
                <S.List>


                    <S.ListItem to="https://github.com/karynnemoreira" >  <img src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-icon-0.png" alt="" width="40" />     </S.ListItem>


                    <S.ListItem to="https://codesandbox.io/u/karynnemoreira" > <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--4W0mc3Tl--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/3772/2e95d533-d5e7-43a0-bef5-f75f3a2781d4.png" alt="" width="40" /></S.ListItem>


                    <S.ListItem to="https://www.linkedin.com/in/karynne-moreira-4865905a/"> <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="" width="40" /> </S.ListItem>


                    <h1> Agora siga as minhas redes</h1>


                    <img src="https://media3.giphy.com/media/eGmKeueVnk31yCRQW5/200w.webp?cid=ecf05e47a9xsnvs76rhcnxt5ck6v37bmd1qv5a5dxz3ah7xl&rid=200w.webp&ct=g" alt="" width="100" />



                </S.List>


            </S.BoxList>

        </S.Container>
    )

}

