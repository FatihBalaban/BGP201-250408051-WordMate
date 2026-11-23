
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import {
  COLORS,
  FONT_SIZES,
  SPACING,
} from '../constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
      />

      <View style={styles.content}>
        <Text style={styles.greeting}>
          WordMate'e Hoş Geldin! 👋
        </Text>

        <Text style={styles.description}>
          İngilizce kelimeler öğrenmeye hazır mısın?
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📚 Kelime Öğren
          </Text>

          <Text style={styles.cardDescription}>
            Yeni İngilizce kelimeler keşfet ve
            kendi kelime listeni oluştur.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            ⭐ Kelimelerim
          </Text>

          <Text style={styles.cardDescription}>
            Kaydettiğin kelimeleri burada
            görüntüleyebileceksin.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: SPACING.large,
    paddingTop: SPACING.large,
  },
  greeting: {
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.medium,
  },
  description: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.large,
  },
  card: {
    backgroundColor: COLORS.surface,
    padding: SPACING.large,
    borderRadius: 16,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardTitle: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SPACING.small,
  },
  cardDescription: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
});

