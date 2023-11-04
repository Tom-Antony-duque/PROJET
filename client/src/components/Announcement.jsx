import styled from "styled-components"

const Container = styled.div`
    height: 30 px;
    padding: 10px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = ()=> {
  return(
    <Container>
      Bienvenu(e) sur TTouTT !!
    </Container>
  )
}

export default Announcement;
