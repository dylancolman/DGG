<template>
    <div class="rating">
        <svg
            class="star"
            @click="setRating(5)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>

        <svg
            class="star"
            @click="setRating(4)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>

        <svg
            class="star"
            @click="setRating(3)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>

        <svg
            class="star"
            @click="setRating(2)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>

        <svg
            class="star"
            @click="setRating(1)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: "Stars",
    props: ["starRating"],
    data() {
        return {
            rating: this.starRating,
            totalStars: 5,
        };
    },
    mounted() {
        this.setStarred(this.rating);
    },
    methods: {
        setStarred(numStars) {
            const stars = [...document.querySelectorAll(".star")].reverse();
            stars.map((star, i) => {
                star.style.fill = "#fff";
                star.style.stroke = "#c3c3c3";
                if (i < numStars) {
                    star.style.fill = "gold";
                    star.style.stroke = "gold";
                }
            });
        },
        setRating(num) {
            if (num == this.rating) {
                this.rating -= 1;
                this.setStarred(this.rating);
            } else {
                this.rating = num;
                this.setStarred(num);
            }
            this.$emit("update-rating", this.rating);
        },
    },
};
</script>

<style>
.rating {
    unicode-bidi: bidi-override;
    direction: rtl;
    letter-spacing: -5px;
    text-align: center;
}
.rating > svg {
    width: 2rem;
    fill: #fff;
    stroke: #c3c3c3;
    display: inline-block;
}
@media (min-width: 380px) {
    .rating > svg {
        width: 3rem;
    }
}
.rating > svg:hover,
.rating > svg:hover ~ svg {
    fill: gold !important;
    stroke: gold !important;
}
</style>