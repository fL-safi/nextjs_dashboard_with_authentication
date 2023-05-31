import styled from "styled-components";
import Image from "next/image";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const KPIMAGE = styled(Image)`
    margin-left: 0.8rem;
    height: 3rem;
    width: 3rem;
`