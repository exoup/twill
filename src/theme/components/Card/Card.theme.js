// theme options
import FilledOptions from "./CardFilled.theme";
// components
import hero from "./CardHero.theme";
import content from "./CardContent.theme";
import title from "./CardTitle.theme";
import section from "./CardSection.theme";

const card = {
    defaultOptions: {
        color: 'default',
        radius: 'round',
        variant: 'solid',
    },
    styles: {
        initial: {
            base: 'overflow-hidden shadow',
        },
        radii: {
            round: 'rounded-md',
            sharp: 'rounded-none'
        },
        variants: {
            solid: FilledOptions,
        }
    }
};

card.hero = hero;
card.content = content;
card.title = title;
card.section = section;
export { card };