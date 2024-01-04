import { styled } from 'styled-components'

export const CenterblockFilter = styled.div`
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
    margin-bottom: 51px;
    justify-content: space-between;
`

export const LeftFilters = styled.div`
    display: flex;
    align-items: center;
`

export const RightFilter = styled.div`
    display: flex;
    align-items: center;
`

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const FilterContent = styled.div`
    position: relative;
    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 60px;
    padding: 6px 20px;
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
    }
    border: ${(props) =>
        props.$isActive ? '1px solid #ad61ff' : '1px solid #ffffff'};
    color: ${(props) => (props.$isActive ? '#ad61ff' : '')};
`

export const PopupList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;
    background-color: #313131;
    color: #fff;
    max-height: 305px;
    max-width: 248px;
    box-sizing: border-box;
    padding: 34px;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
    left: 0;
    overflow: scroll;
    margin-top: 10px;
`

export const PopupItem = styled.li`
    transition: all 0.1s;
    &:hover {
        color: #b672ff;
        cursor: pointer;
        text-decoration: underline;
    }
`
