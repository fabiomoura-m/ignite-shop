import { useRouter } from 'next/router';
import {
    ImageContainer,
    ProductContainer,
    ProductDetails
} from '../../styles/pages/product';

export default function Product() {
    const { query } = useRouter();
    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, dolores maxime repellendus nobis maiores quis
                    praesentium vel fugiat, officiis laboriosam tenetur nesciunt
                    ad magnam ut consectetur modi! Repudiandae, perferendis! Id.
                </p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    );
}
