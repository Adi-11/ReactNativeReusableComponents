export const button: string = `
<View style={{width: this.props.width, margin: this.props.margin}}>
  <TouchableOpacity onPress={this.props.onpress}>
    <View
      style={{
        backgroundColor: this.props.color,
        height: this.props.height,
        borderRadius: this.props.borderRadius,
        justifyContent: 'center',
      }}>
      {this.props.text && (
        <Text
          style={{
            textAlign: 'center',
            fontSize: this.props.textSize,
            color: this.props.textcolor ? this.props.textcolor : 'black',
          }}>
          {this.props.text + '</>'}
        </Text>
      )}
      {this.props.iconname && (
        <FontAwesomeIcons
          style={{alignSelf: 'center'}}
          name={this.props.iconname}
          size={this.props.iconsize}
          color={this.props.iconcolor}
        />
      )}
    </View>
  </TouchableOpacity>
</View>`;

export const card = `
<View
    style={{
    flexDirection: !this.props.reverse ? 'row' : 'row-reverse',
    padding: SPACING,
    borderRadius: this.props.cardBorderRadius,
    width: this.props.cardWidth,
    backgroundColor: this.props.cardBackgroundColor || '#0000',
    marginBottom: SPACING,
    height: this.props.cardHeight,
}}>
    <Image
        style={[
        {
        borderRadius: this.props.imageBorderRadius,
        width: IMAGE_SIZE / 2 + 10,
        height: IMAGE_SIZE / 2 + 10,
        },
        ]}
        source={this.props.CardImageUri as any}
    />
        <View>
            <View
                style={[
                {
                    alignItems: 'center',
                    justifyContent: !this.props.reverse ? 'center' : 'flex-end',
                },
                this.props.reverse
                ? {marginRight: 10, width: width - 120}
                : {marginLeft: 20},
            ]}>
                <Text
                    style={{
                        fontSize: this.props.titleTextSize,
                        color: this.props.titleTextColor,
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                }}>
                    {this.props.titleText}
                </Text>
            </View>
            <View
                style={[
                    {
                        position: 'absolute',
                        top: 60,
                        width: !this.props.reverse ? width - 70 : width - 60,
                    },
                        this.props.reverse ? {right: -50} : {left: -50},
            ]}>
                <Text
                    style={{
                        fontSize: this.props.descTextSize,
                        textAlign: 'justify',
                        color: this.props.descTextColor,
                        opacity: 0.6,
                }}>
                    {this.props.descText}
                </Text>
                <View
                    style={[
                        this.props.reverse
                        ? {marginLeft: 0}
                        : {marginLeft: 110, width: '100%'},
                        {},
                ]}>
                    {this.props.children}
                </View>
            </View>
        </View>
    </View>
`;
