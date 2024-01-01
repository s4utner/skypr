import { styled } from 'styled-components'

export const TrackPlayLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 26%;
    cursor: pointer;
`

export const TrackPlayLike = styled.div`
    padding: 5px;
`

export const TrackPlayDislike = styled(TrackPlayLike)`
    margin-left: 28.5px;
`

export const TrackPlayLikeSvg = styled.svg`
    margin-left: 10px;
    width: 14px;
    height: 12px;
    fill: ${(props) => (props.$isLiked ? '#B672FF' : 'transparent')};
    stroke: ${(props) => (props.$isLiked ? 'none' : '#696969')};
`

export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
    display: none;
`