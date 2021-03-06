import React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import thumbnailOne from '../../assets/class-thumbnail-1.jpg';
import thumbnailTwo from '../../assets/class-thumbnail-2.jpg';
import thumbnailThree from '../../assets/class-thumbnail-3.jpg';

const Container = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  @media (max-width: 1220px) {
    width: 49%;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
  width: 31%;
  height: 30%;
  min-height: calc(70vh / 3);
  display: flex;
  position: relative;
  margin-bottom: 1.5rem;
  cursor: pointer;

  .progress_bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4%;
    border-radius: 0 0 6px 6px;
    background-color: #444444;
  }
`;

const LeftBlock = styled.div`
  width: 54px;
  background-color: #222;
  border-radius: 6px 0 0 6px;
`;

const Gradient = styled.div`
  margin-left: 53px;
  position: absolute;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #222222 0%,
    #222222 25.21%,
    rgba(34, 34, 34, 0.6) 56.05%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Image = styled.div`
  margin-left: auto;
  width: calc(100% - 100px);
  background-image: ${props => {
    switch (props.slug) {
      case 'class-thumbnail-1.jpg':
        return `url(${thumbnailOne})`;
      case 'class-thumbnail-2.jpg':
        return `url(${thumbnailTwo})`;
      case 'class-thumbnail-3.jpg':
        return `url(${thumbnailThree})`;
      default:
        return `url(${thumbnailOne})`;
    }
  }};
  background-size: cover;
  border-radius: 0 7px 7px 0;
`;

const Info = styled.div`
  position: absolute;
  z-index: 11111;
  width: 100%;
  height: 95%;
  color: #fff;
  padding: 1rem 0 1rem 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  p {
    margin: 0;
  }

  .top {
    font-size: 17px;
    font-weight: bold;
    max-width: 250px;
    word-wrap: break-word;
  }

  .bottom {
    font-size: 13px;
    span {
      font-weight: bold;
    }
  }
`;

export default function Card({ id, title, instructor, level, song, url, slug, progress }) {
  const history = useHistory();

  return (
    <Container id={id} onClick={() => history.push(`/classes/${id}`)}>
      <>
        <Info>
          <div className="top">
            <p>{title}</p>
          </div>

          <div className="bottom">
            <p>
              Instructor: <span>{instructor}</span>
            </p>
            <p>
              Level: <span>{level}</span>
            </p>
            <p>
              Song: <span>{song}</span>
            </p>
          </div>
        </Info>
      </>
      <>
        <Gradient />
        <>
          <LeftBlock />
          <Image slug={slug} />
        </>
      </>
      <ProgressBar className="progress_bar" now={progress * 100} />
    </Container>
  );
}
