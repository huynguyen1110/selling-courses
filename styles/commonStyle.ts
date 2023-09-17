import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center'
    },
    horizontal_container: {
        flex: 0,
        flexDirection: "row"
    },
    icon_style: {
        width: 20,
        height: 20,
        marginHorizontal: 8,
        opacity: 0.6
    },
    header_text_1: {
        fontWeight: "bold",
        fontSize: 40
    },
    header_text_2: {
        fontWeight: "700",
        fontSize: 24
    },
    text_center: {
        textAlign: "center"
    },
    text_opacity: {
        opacity: 0.6
    },
    text_content: {
        fontSize: 16
    },
    text_blue: {
        color: '#81b1eb'
    },
    item_center: {
        alignSelf: 'center'
    },
    item_space_between: {
        justifyContent: "space-between"
    },
    underline_border: {
        borderBottomWidth: 2,
        opacity: 0.3,
        borderBottomColor: '#0a0a0a',
        width: "100%"
    },
    half_underline_border: {
        borderBottomWidth: 2,
        opacity: 0.3,
        borderBottomColor: '#0a0a0a',
        width: "45%"
    },
    large_margin_top: {
        marginTop: 30
    },
    medium_margin_vertical: {
        marginVertical: 20
    },
    small_margin_vertical: {
        marginVertical: 12
    },
    text_input: {
        width: "80%",
        height: 30,
        padding: 8
    },
    small_text_input: {
        width: "45%",
        height: 30,
        padding: 8
    }
})