## Open Graph (OG) Dynamic Images for Zillow

OG dynamically generates images when sharing Zillow property links, offering key
advantages:

![Zillow Dynamic Image](/assets/zillow-og@1x.png)
![Zillow Dynamic Video](/assets/zillow-og.mp4)

| **Benefit**                | **Description**                                                         |
| -------------------------- | ----------------------------------------------------------------------- |
| **Enhanced Clarity**       | Descriptive images clarify content, increasing click-through rates.     |
| **Marketing Impact**       | Highlight property features for better marketing on social media.       |
| **Resource Efficiency**    | No need for pre-generated images, reducing storage and bandwidth usage. |
| **Simplified Interaction** | Instant property previews simplify user communication.                  |

### Considerations

- **Professional Design**: Achieve a polished design with Zillow's corporate
  image and UX expertise.

- **Code Optimization**: Optimize code for performance.

- **Security**: Enhance security with encrypted tokens.

## Installation and Usage

1. Install Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

2. Run Locally:

```bash
deno run --allow-net --allow-env --allow-read --watch og.tsx
```

### Local Examples

| **Parameter**     | **Example Value**                                 |
| ----------------- | ------------------------------------------------- |
| `image`           | `d08f4db7ccf39d59310d18117acbd400-cc_ft_1536.png` |
| `beds`            | `1` (Default)                                     |
| `pets`            | (No value required)                               |
| `airConditioning` | (No value required)                               |
| `parking`         | (No value required)                               |

- Example 1:
  `http://localhost:8000/?image=d725ad1f1a02fbeb77f14ee089262f15-cc_ft_1536.png&beds=4&pets&airConditioning&parking`

- Example 2:
  `http://localhost:8000/?image=d725ad1f1a02fbeb77f14ee089262f15-cc_ft_1536.png&beds=2&airConditioning`

Thank you for pointing out the correction, and I appreciate your understanding.

### HTML Header Usage

```html
<head>
  <meta property="og:image" content="<API URL>/?a4cbc32ba08810d85534d1a6f65dc840-cc_ft_768.png" />
</head>
```
