import React from "react";import { Container } from "src/components/ui";

const Favorites: React.FC = () => {
  return (
    <section className="favorites">
      <Container>
        <div className="favoritesInner">Favorites</div>
      </Container>
    </section>
  );
};

export { Favorites };
