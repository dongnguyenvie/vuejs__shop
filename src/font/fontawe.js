import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faHeart,
    faShoppingCart,
    faSearch,
    faCheckSquare,
    faPaperPlane,
    faAngleRight,
    faStar
} from '@fortawesome/free-solid-svg-icons'
export default () => {

    library.add(
        faShoppingCart,
        faHeart,
        faSearch,
        faCheckSquare,
        faPaperPlane,
        faAngleRight,
        faStar
    );
}