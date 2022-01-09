import { Product } from "@common/types/product";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

const placeholderImage = "/product-image-placeholder.svg";

interface Props {
  product: Product;
}

const ProductCard: FunctionComponent<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>14 SEK</span>
        </div>
        {product.images && (
          <Image
            alt={product.name ?? "Product Image"}
            // ?? if leftside not provided go with right side
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
