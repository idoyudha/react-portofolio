import React from 'react'
import { Link } from 'react-router-dom'
import { Container, ContentWrapper, Header1, Header2, Description, Return } from './404Elements'

const Page404NotFound = () => {
    return (
        <>  <Container>
                <ContentWrapper>
                    <Header1>404</Header1>
                    <Header2>Page Not Found</Header2>
                    <Description>The link you clicked may be broken or the page may have been removed.</Description>
                    <Return>
                        <Link to="/" style={{textDecoration: 'none', color: '#6C63FF'}}>Return Home?</Link>
                    </Return>
                </ContentWrapper>
            </Container>
        </>
    )
}

export default Page404NotFound
