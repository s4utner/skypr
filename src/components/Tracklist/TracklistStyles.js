import { styled } from 'styled-components'

export const ContentPlaylist = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;
`

export const LoadingTracksError = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 64px;
    text-align: center;
    color: red;
    padding: 20px;
`
