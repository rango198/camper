import styled from '@emotion/styled';

export const WrraperCatalogItem = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid #212121;
  border-radius: 20px;
  padding: 24px;
`;

export const WrrapWidth = styled.div`
  max-width: 526px;
`;

export const ImgItem = styled.div`
  min-width: 290px;
  height: 310px;

  border-radius: 12px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
`;

export const WrrapNameAndPice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
export const TextName = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;
export const PriceStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TextPrice = styled.p`
  color: #101828;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
`;

export const WrraperDescription = styled.div`
  width: 400px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

export const WrraperRating = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;
