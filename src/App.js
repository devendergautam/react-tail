import React from 'react';
import {
    HeaderContainer,
    ContentContainer,
    ContentHeading,
    ContentText,
    HeaderImage,
    PageContainer
} from "./styles";


function App() {
  return (
      <PageContainer>
          <HeaderContainer>
              <HeaderImage/>
      <ContentContainer>
          <ContentHeading>

              The Coldest Sunset

          </ContentHeading>
              <ContentText>
                  A beautiful view of sunset.
              </ContentText>
      </ContentContainer>
          </HeaderContainer>
      </PageContainer>
  );
}

export default App;
