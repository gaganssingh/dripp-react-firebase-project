import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const handleNavigationByClickingOnTitle = () => navigate(`/shop/${title}`);

  return (
    <DirectoryItemContainer onClick={handleNavigationByClickingOnTitle}>
      <BackgroundImage bgImage={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
