import React from "react";
import styled from "styled-components";

type Props = {
  toc: {
    items: [
      {
        url: string;
        title: string;
        items?: [
          {
            url: string;
            title: string;
            items?: [
              {
                url: string;
                title: string;
                items?: [
                  {
                    url: string;
                    title: string;
                    items?: [
                      {
                        url: string;
                        title: string;
                        items?: [
                          {
                            url: string;
                            title: string;
                          }
                        ];
                      }
                    ];
                  }
                ];
              }
            ];
          }
        ];
      }
    ];
  };
};

const TocContainer = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textPrimary};
  box-shadow: ${(props) => props.theme.boxShadows.elevation3};
  border-radius: 4px;
  right: 0;
  width: 18%;
  max-height: 200px;
  margin: 20px;
  padding: 15px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  max-height: 200px;
  ::-webkit-scrollbar {
    width: 0.25rem;
  }

  ::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.pink};
  }
`;

const toc = ({ toc }: Props) => {
  return (
    <TocContainer>
      <InnerScroll>
        {toc.items.map((item) => (
          <div key={item.url}>
            <ul style={{marginLeft: "0px", padding: "1px"}}>
              <li style={{listStyle: 'none'}}>
                <a href={item.url}>{item.title}</a>
              </li>
            </ul>
            {item.items
              ? item.items.map((item) => (
                  <ul style={{ paddingLeft: "8px" }} key={item.url}>
                    <li>
                      <a href={item.url}>{item.title}</a>
                    </li>
                    {item.items
                      ? item.items.map((item) => (
                          <ul style={{ paddingLeft: "16px" }} key={item.url}>
                            <li>
                              <a href={item.url}>{item.title}</a>
                            </li>
                            {item.items
                              ? item.items.map((item) => (
                                  <ul
                                    style={{ paddingLeft: "24px" }}
                                    key={item.url}
                                  >
                                    <li>
                                      <a href={item.url}>{item.title}</a>
                                    </li>
                                    {item.items
                                      ? item.items.map((item) => (
                                          <ul
                                            style={{ paddingLeft: "32px" }}
                                            key={item.url}
                                          >
                                            <li>
                                              <a href={item.url}>
                                                {item.title}
                                              </a>
                                            </li>
                                          </ul>
                                        ))
                                      : null}
                                  </ul>
                                ))
                              : null}
                          </ul>
                        ))
                      : null}
                  </ul>
                ))
              : null}
          </div>
        ))}
      </InnerScroll>
    </TocContainer>
  );
};

export default toc;
