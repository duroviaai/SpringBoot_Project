package com.example.Project8.auth;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    // Secret must be at least 32 chars for HS256
    private static final String SECRET = "qwertyuiopasdfghjklzxcvbnm123456";

    private final SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes());

    // 24 hours
    private final long EXPIRATION = 1000 * 60 * 60 * 24;

    // Generate JWT token
    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(key)
                .compact();
    }

    // Extract username from token
    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    // Validate token
    public boolean validateToken(String token) {
        try {
            getClaims(token); 
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // Parse & return claims
    public Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}