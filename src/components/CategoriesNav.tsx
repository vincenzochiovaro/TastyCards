import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { fetchCategories } from "../apiCalls";
import { Link } from "react-router-dom";
import "../styles/categoriesNav.css";

type categoryListData = {
  id: number;
  category_name: string;
};

const CategoriesNav = () => {
  const [categoryList, setCategoryList] = useState<categoryListData[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategories();
        setCategoryList(categories);
      } catch (error) {
        console.log("Error fetching categories:", error);
        setCategoryList(null);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row className="d-flex">
        {categoryList?.map((category) => (
          <Col data-testid="categoryList" key={category.id}>
            <Link
              className="linkStyleNav__css"
              to={`/recipes/${category.category_name}`}
            >
              {category.category_name}
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesNav;
