import styled from 'styled-components'

export const StyledAlbumArt = styled.div` 
aspect-ratio : 1 / 1;
width: 100%;
background-image: url("${process.env.PUBLIC_URL +'/images/unknown_album.png'}");
background-size: contain;
background-repeat: no-repeat;
`

export const AlbumArtContainer = styled.div`
border-radius: 25px;
border: 2px solid #FFED2D;
background-color: rgba(0, 0, 0, .5);
width:33vw;
float:left;
`

export const SongInfoContainer = styled.div`
margin-top:5%;
`