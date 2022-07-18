import styled from 'styled-components'
import { rotate } from '../../styles/animation'

export const LdsDualRing = styled.div`
    ${rotate()}
    border: 2px solid #22dad0;
    border-right: 2px solid transparent;
    border-radius: 50%;
    height: 40px;
    margin-bottom: 10px;
    margin-left: calc(50% - 40px);
    width: 40px;
    z-index: 10;
`
