import styled from 'styled-components';

const Container = styled.div`
    margin: 0 0 1rem 0;
    & img{
        border-radius: 5px;
    }
`;

function Banner() {
    return (
        <Container>
            <img src="https://weebpal.com/sites/default/files/styles/image_1920x690/public/2023-08/Hero-banner-2.jpg?itok=c4M23WDg" alt="Banner"
                className="banner" />
        </Container>
    )
}

export default Banner;